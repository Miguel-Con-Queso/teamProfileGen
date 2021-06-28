const fs = require('fs');
const { resolve } = require('path/posix');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('../dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'Page generated!'
            });
        });
    });
};

module.exports = writeFile;