import { cwd } from 'node:process';
const getDiff = (file1, file2) => {
    const currDir = cwd();
    const obj1 = JSON.parse(file1);
    const obj2 = JSON.parse(file2);
    console.log(obj1);
    console.log(obj2);
}
export {getDiff};