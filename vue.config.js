module.exports = {
  runtimeCompiler: true,
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Social Hack | Edição Comunidades";
      return args;
    });
  },
};
