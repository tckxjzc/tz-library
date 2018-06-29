let upload = {
    err(err: Object) {
        let data = new FormData();
        data.append('url', location.href);
        data.append('content', JSON.stringify(err));
        return fetch('//up.tckxjzc.xyz/err/upload', {
            method: 'post',
            body: data
        });
    },
    speed(start: number, end: number) {
        let data = new FormData();
        data.append('url', location.href);
        data.append('start', start + '');
        data.append('end', end + '');
        return fetch('//up.tckxjzc.xyz/speed/upload', {
            method: 'post',
            body: data
        })
    }
};

export default upload;