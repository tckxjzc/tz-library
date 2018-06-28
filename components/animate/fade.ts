import styles from './fade.scope.scss';


export default {
    getClassName(status:string) {
        console.log(status);
        return styles[status];
    }
}