/* @flow */
import { connect } from 'react-redux';
import LoginComponent from "./components";
import type {GlobalState} from "../app";
import {loadTasks} from "./actions";

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
  loadTasks: () => void
}

function mapDispatchToProps(dispatch) : DispatchProps{
  return {
    loadTasks: () => dispatch(loadTasks()),
  }
}

export type ExternalProps = {}

export type CompleteProps = StateProps & DispatchProps & ExternalProps;

const ConnectedLoginComponent = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

export default ConnectedLoginComponent;