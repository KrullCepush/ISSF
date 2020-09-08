import { createUseStyles } from 'react-jss';

export default createUseStyles({
    loader: {
        flex: 1,
        backgroundImage: `url(${require('./spinner.svg')})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }
});