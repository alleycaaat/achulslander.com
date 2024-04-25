// eslint-disable-next-line react/prop-types
const Credit = ({ setShowCredit }) => {
    return (
        <section className='credit' id='credit'>
            <h3>Credit</h3>
            <p>Most of the icons used on this website are from <a href='https://icons8.com/' target='_blank' rel='noopener noreferrer'>icons8.com</a>. Individual credit is listed below.</p>
            <ul>
                <li><a target='_blank' rel='noopener noreferrer' href='https://icons8.com/icon/12599/github'>GitHub</a> icon by <a target='_blank' rel='noopener noreferrer' href='https://icons8.com'>Icons8</a></li>
                <li><a target='_blank' rel='noopener noreferrer' href='https://icons8.com/icon/HnB8zGOh5xgd/hashnode'>Hashnode</a> icon by <a target='_blank' rel='noopener noreferrer' href='https://icons8.com'>Icons8</a></li>
                <li><a target='_blank' rel='noopener noreferrer' href='https://icons8.com/icon/60014/twitter'>Twitter</a> icon by <a target='_blank' rel='noopener noreferrer' href='https://icons8.com'>Icons8</a></li>
                <li><a target='_blank' rel='noopener noreferrer' href='https://icons8.com/icon/38382/codepen'>CodePen</a> icon by <a target='_blank' rel='noopener noreferrer' href='https://icons8.com'>Icons8</a></li>
                <li><a target='_blank' rel='noopener noreferrer' href='https://icons8.com/icon/23028/html-5'>Html 5</a> icon by <a target='_blank' rel='noopener noreferrer' href='https://icons8.com'>Icons8</a></li>
                <li><a target='_blank' rel='noopener noreferrer' href='https://icons8.com/icon/38273/css3'>CSS3</a> icon by <a target='_blank' rel='noopener noreferrer' href='https://icons8.com'>Icons8</a></li>
                <li><a target='_blank' rel='noopener noreferrer' href='https://icons8.com/icon/84710/bootstrap'>Bootstrap</a> icon by <a target='_blank' rel='noopener noreferrer' href='https://icons8.com'>Icons8</a></li>
                <li><a target='_blank' rel='noopener noreferrer' href='https://icons8.com/icon/58811/react-native'>React Native</a> icon by <a target='_blank' rel='noopener noreferrer' href='https://icons8.com'>Icons8</a></li>
                <li><a target='_blank' rel='noopener noreferrer' href='https://icons8.com/icon/PwvuIX3srapO/sass-avatar'>Sass Avatar</a> icon by <a target='_blank' rel='noopener noreferrer' href='https://icons8.com'>Icons8</a></li>
                <li><a target='_blank' rel='noopener noreferrer' href='https://icons8.com/icon/42769/javascript-logo'>JavaScript Logo</a> icon by <a target='_blank' rel='noopener noreferrer' href='https://icons8.com'>Icons8</a></li>
                <li><a target='blank' rel='noopener noreferrer' href='https://worldvectorlogo.com/logo/react-native-1'>React Native</a> icon by <a target='blank' rel='noopener noreferrer' href='https://worldvectorlogo.com/'>WorldVectorLogo</a></li>
            </ul>
            <button className='credit-button' onClick={() => { setShowCredit(false); }}>Hide Credit</button>
        </section>
    );
};

export default Credit;