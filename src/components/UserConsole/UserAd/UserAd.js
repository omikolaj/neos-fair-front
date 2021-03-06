import React from 'react';
import Button from '../../UI/Button/Button';
import Aux from '../../../hoc/Aux/Aux';
import classes from './UserAd.css';
import FlashMessage from '../../../containers/Utils/FlashMessage/FlashMessage';

const userAd = (props) => {
  const message = props.message ? <FlashMessage duration={3000} class='Info'><span>{props.message}</span></FlashMessage> : null;
    return ( 
    <Aux>
      <div className={classes.UserAd}>
        <h3 className={classes.UserAdTitle}>{props.title}</h3>
        {message}
      </div>
      <Button btnType="PublishButton" clicked={(adID) => props.publishClicked(props.adID)}>{props.published ? 'Unpublish' : 'Publish'}</Button>
      <Button btnType="RemoveButton" clicked={(adID) => props.removeClicked(props.adID)}>Remove</Button>      
    </Aux>      
    )
 }

export default userAd;