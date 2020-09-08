// const {ReactLoadablePlugin} = require('react-loadable/webpack');

    console.log(process.env.PUBLIC_PATH)
module.exports = {
  modify(config, { target, dev }, webpack) {

    const isServer = target !== 'web';
    config.resolve.modules.push('src');


    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env": {
          CLIENT_PUBLIC_PATH: JSON.stringify(process.env.CLIENT_PUBLIC_PATH || ''),
          PUBLIC_PATH: JSON.stringify(process.env.PUBLIC_PATH || ''),
          PRJ_ENV: JSON.stringify(process.env.PRJ_ENV || "staging"),
          isServer: isServer
        }
      })
    );

    // if (!isServer) {
    //   config.plugins.push(
    //     new ReactLoadablePlugin({
    //       filename: './build/react-loadable.json',
    //     })
    //   );
    // }

    return config;
  },
};