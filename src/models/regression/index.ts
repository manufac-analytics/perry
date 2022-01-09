import { RandomForestRegression } from "ml-random-forest";
import MultivariateLinearRegression from "ml-regression-multivariate-linear";
import { RobustPolynomialRegression } from "ml-regression-robust-polynomial";
import { kombi } from "kombi";
import data from "./WineQualityDataSetRed.json";

console.log(data);
console.log(RandomForestRegression, MultivariateLinearRegression, RobustPolynomialRegression, kombi);

