import fs from "fs";
import { RandomForestRegression } from "ml-random-forest";
import MultivariateLinearRegression from "ml-regression-multivariate-linear";
import { RobustPolynomialRegression } from "ml-regression-robust-polynomial";
import { kombi } from "kombi";

export const dataSet = fs.readFileSync("WineQualityDataSetRed.csv")
console.log(dataSet);
console.log(RandomForestRegression, MultivariateLinearRegression, RobustPolynomialRegression);

