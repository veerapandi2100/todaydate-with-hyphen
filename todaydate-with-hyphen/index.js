
const nowDateFormat = () => {

    const nowDate = new Date();
    
    const todaydate = nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getDate();
    
    return todaydate;
    
    }
    
    module.exports = nowDateFormat();
    