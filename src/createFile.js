const fs = require('fs');

module.exports = createdFile => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', createdFile, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'An HTML file has been created'
            });
        });
    });
};