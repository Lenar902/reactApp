import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/message-reducer';
import Message from './Message';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    stateMsgPage : state.messagePage 
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => dispatch(addMessageActionCreator()),
    updateMessage: (text) => dispatch(updateMessageActionCreator(text))
  }
}

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);

export default MessageContainer;
