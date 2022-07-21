import { v4 as uuidv4 } from "uuid";

export function sliceArray(array){
    const newarray = [];
        const perpage = 10;

        let start = 0;
        let end = array.length < perpage ? array.length : perpage;
        for (let i = 0; i < Math.ceil(array.length / perpage); i++) {
            let arr = [];
            for (let i = start; i < end; i++) {
                arr.push({id:uuidv4(), arr:array[i]});
            }
            start = start + perpage;
            end = end + perpage > array.length ? array.length : end + perpage;
            newarray.push(arr);
        }


        return newarray;
}