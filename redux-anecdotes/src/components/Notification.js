import { connect } from 'react-redux'

const Notification = (props) => {
  const notification = props.info
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if(notification){
    return (
      <div style={style}>
        {notification}
      </div>
    )
  }else{
    return(<div></div>)
  }
  
}

const mapStateToProps = (state) => {
  return {
    info: state.info,
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)

export default ConnectedNotification