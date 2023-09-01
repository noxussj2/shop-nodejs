/**
 * 自动化部署
 */
const gulp = require('gulp');
const sftp = require('gulp-sftp-up4');

const sftpConfig = {
    host: '43.139.119.122', // 服务器地址
    user: 'root', // 帐号
    pass: 'abc-123-123', // 密码
    port: 22, // 端口
    remotePath: '/nodejs/shop-nodejs', // 部署到服务器的路径
};

// 更新web目录
gulp.task('upload', function() {
    return gulp.src([ './**', '!./node_modules/**' ]).pipe(sftp(sftpConfig));
});
