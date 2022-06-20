import mongoose from "mongoose";

const connectToDatabase = async () => {
	mongoose.connect(
		`mongodb://root:${process.env.MONGO_INITDB_ROOT_PASSWORD}@mongo:27017/admin`,
		(error) => {
			if (error) {
				return console.log("ERRO: ", error);
			}
			return console.log("Conexão ok");
		}
	);
};

export default connectToDatabase;
