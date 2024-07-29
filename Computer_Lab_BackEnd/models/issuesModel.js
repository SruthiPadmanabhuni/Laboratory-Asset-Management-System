const pool = require('../config/db');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'padmanabhunisurya9346@gmail.com',
      pass: 'iwsvwatxmnklhkhl',
    },
  });

const resolvedMail = async (email,lab,pc) => {
    try {
      const mailOptions = {
        from: 'padmanabhunisurya9346@gmail.com',
        to: email,
        subject: 'Automated Email',
        text: 'Your issue for ' + lab + ' ' + pc + ' has been resolved.',
      };
  
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent: ', info.messageId);
    } catch (error) {
      console.error('Error sending email: ', error);
    }
  };

  const issueRaisedAlert = async (email,lab,pc) => {
    try {
      const mailOptions = {
        from: 'padmanabhunisurya9346@gmail.com',
        to: email,
        subject: 'Automated Email',
        text: 'New issue raised for ' + lab + ' ' + pc + '.',
      };
  
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent: ', info.messageId);
    } catch (error) {
      console.error('Error sending email: ', error);
    }
  };




class issuesModel {
    static getStudentIssues(username) {
        return new Promise((resolve, reject) => {
            pool.query(`select * from issues where student = ?`, [username], (err, results, fields) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            });
        }
        );
    }

    static updateToProgress(id) {
        return new Promise((resolve, reject) => {
            pool.query(`update issues set status = 'In progress' where id = ?`, [id], (err, results, fields) => {
                if (err) {
                    return reject(err);
                }
                return resolve("Issue updated successfully");
            }
            );
        }
        );
    }

    static updateIssue(id, status) {
        return new Promise((resolve, reject) => {
            const now = new Date();
            const utcTime = now.getTime();
            const istTime = utcTime + 5 * 60 * 60 * 1000 + 30 * 60 * 1000;
            const istDate = new Date(istTime);
            const today_date = istDate.toISOString().slice(0, 10);

            if(status == 'resolved'){
                pool.query(`select * from issues where id = ?`, [id], (err, results, fields) => {
                    if (err) {
                        return reject(err);
                    }
                    let username = results[0].student;
                    let email = '';
                    if(username.slice(3,5)==='21')
                    {
                        email = username.slice(3,5) + '211a' + username.slice(5,9) + '@bvrit.ac.in';
                    }
                    else if(username.slice(3,5)==='22')
                    {
                        email = username.slice(3,5) + '215a' + username.slice(5,9) + '@bvrit.ac.in';
                    }
                    resolvedMail(email,results[0].lab,results[0].pc);
                }
                );
            }

            pool.query(`update issues set status = ?, IssueResolvedDate = ? where id = ?`, [status, today_date.slice(0,10), id], (err, results, fields) => {
                if (err) {
                    return reject(err);
                }
                return resolve("Issue updated successfully");
            }
            );
        }
        );
    }

    static getPCissues(lab, PC) {
        return new Promise((resolve, reject) => {
            pool.query(`select * from issues where lab = ? and pc = ?`, [lab, PC], (err, results, fields) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            });
        }
        );
    }

    static getstatusissues(status) {
        return new Promise((resolve, reject) => {
            pool.query(`select * from issues where status = ?`, [status], (err, results, fields) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            });
        }
        );
    }

    static postIssue(username, lab, PC, issue, desc) {
        return new Promise((resolve, reject) => {
            const now = new Date();
            const utcTime = now.getTime();
            const istTime = utcTime + 5 * 60 * 60 * 1000 + 30 * 60 * 1000;
            const istDate = new Date(istTime);
            const today_date = istDate.toISOString().slice(0, 10);

            pool.query(`select * from issues where student = ? and lab = ? and pc = ? and issue = ?`, [username, lab, PC, issue], (err, results, fields) => {
                if (err) {
                    return reject(err);
                }
                if (results.length == 0) {
                    issueRaisedAlert('rishik4384@gmail.com',lab,PC);
                    pool.query(`insert into issues (student, lab, pc, issue, IssueRaisedDate, description) values (?, ?, ?, ?,?,?)`, [username, lab, PC, issue, today_date, desc], (err, results, fields) => {
                        if (err) {
                            return reject(err);
                        }
                        return resolve("Issue raised successfully");
                    });
                }
                else {
                    return resolve("Issue already exists");
                }
            });
        }
        );
    }
}

module.exports = issuesModel;