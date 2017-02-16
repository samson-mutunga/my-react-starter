import delay from './delay.api';

const credentials = {
    username: 'admin@admin.com',
    password: 'password'
}

class LoginApi {
  static login(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          if ( data.username === credentials.username && data.password === credentials.password ) {
            resolve({
                token: Date.now (),
                profile: {},
                message: 'You have successfully logged in.'
            });
          }
          else {
              reject({
                  error: true,
                  message: 'Incorrect username and password!'
              });
          }
        
      }, delay);
    });
  }

}

export default LoginApi;
