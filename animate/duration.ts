import styles from './duration.scss';
export let D5000=5000;
export let D3000=3000;
export let D2500=2500;
export let D2000=2000;
export let D1500=1500;
export let D1000=1000;
export let D500=500;
export default {
    getClassName(time:number){
        let name=`duration_${time}`;
        return styles[name]?styles[name]:styles[`duration_1000`]
    }
}