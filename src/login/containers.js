/* @flow */
import { connect } from 'react-redux';
import LoginComponent from "./components";
import type {GlobalState} from "../app";

export function stateToLocalState(state : GlobalState) : LoginState {
  return state.loginReducer;
}

export type StateProps = {

}

function mapStateToProps(state) : StateProps {
  const localState = stateToLocalState(state);
  return {

  }
}

export type DispatchProps = {

}

function mapDispatchToProps(dispatch) : DispatchProps{
  return {
  }
}

export type ExternalProps = {}

export type CompleteProps = StateProps & DispatchProps & ExternalProps;

const ConnectedLoginComponent = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

export default ConnectedLoginComponent;