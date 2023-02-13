// "path" ya esta disponible en node, por lo que no requiere una instalcion
const path = require("path")

// se crea un objeto exports, para exportarlo con una configuracion deseada

module.exports = {
	entry: "./src/index.js", // punto de entrada
	output:{
		path: path.resolve(__dirname,"dist"), //retorna la ruta del directorio y el archivo donde se guarda main.js
		filename: "main.js"}, // punto de salida
	resolve: {
		extensions :[".js"]  // extenciones con las que va trabajar el proyecto
    },
    module:{
		rules: [{
			test: /\.m?js$/,  //permite saber que tipo de extensiones e va usar
			exclude: /node_modules/,
			use:{
					loader: "babel-loader"
					}
		}]
		}
}