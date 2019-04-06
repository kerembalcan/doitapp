/* @flow */
import { connect } from 'react-redux';
import BoilerplateComponent from "./components";

export function stateToLocalState(state : Object) : LoginState {
  return state.boilerplateReducer;
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

const ConnectedBoilerplateComponent = connect(mapStateToProps, mapDispatchToProps)(BoilerplateComponent);

export default ConnectedBoilerplateComponent;