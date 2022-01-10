import { RandomForestRegression } from "ml-random-forest";
import MultivariateLinearRegression from "ml-regression-multivariate-linear";
import { RobustPolynomialRegression } from "ml-regression-robust-polynomial";
import { kombi } from "kombi";
import data from "./WineQualityDataSetRed.json";

console.log(RandomForestRegression, MultivariateLinearRegression, RobustPolynomialRegression, kombi);
const inputs = data.map((el) => Object.values(el).slice(0,-1));
const outputs = data.map((el) => el.quality);
const TRAINING_LENGTH = data.length * 90 / 100; // 90 % of the whole data
const trainX = inputs.slice(0, TRAINING_LENGTH);
const trainY = outputs.slice(0, TRAINING_LENGTH);
const predictX = inputs.slice(TRAINING_LENGTH);
// const predictY = outputs.slice(TRAINING_LENGTH);

// MultivariateLinearRegression
const arrayTrainY = trainY.map((el) => [el]); // needed because MultivariateLinearRegression contains multiple dependent and independent variables
const MVLRModel = new MultivariateLinearRegression(trainX, arrayTrainY);
console.log(MVLRModel.toJSON());
console.log(MVLRModel.predict(predictX).map((el) => el[0].toPrecision(1)));


// RandomForestRegressions
const options = {
  seed: 3,
  maxFeatures: 8,
  replacement: false,
  nEstimators: 200
};
const RFRModel = new RandomForestRegression(options);
RFRModel.train(trainX, trainY);
console.log(RFRModel.toJSON());
console.log(RFRModel.predict(predictX).map((el) => el.toPrecision(1)));



