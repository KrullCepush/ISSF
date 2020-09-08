import * as C from './consts';

export function getWatch() {
    return {
        types: C.GET_WATCH,
        url: 'http://ec2-3-125-31-236.eu-central-1.compute.amazonaws.com/api/videos',
        creds: false
    }
}