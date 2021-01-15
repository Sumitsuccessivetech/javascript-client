import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import TraineeList from './TraineeList';
import TraineeDetail from './TraineeDetail';

<<<<<<< HEAD
function Trainee(props) {
  const { match: { path } } = props;
  return (
    <Switch>
      <Route exact path={path} component={TraineeList} />
      <Route exact path={`${path}/:traineeId`} component={TraineeDetail} />
    </Switch>
  );
}
Trainee.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};
export default Trainee;
=======
export default class Trainee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

    handleClickOpen = () => {
      this.setState({ open: true });
    };

    handleClose = () => {
      const { open } = this.state;
      this.setState({ open: false });
      return open;
    };

    handleSubmit = (data) => {
      this.setState({
        open: false,
      }, () => {
        console.log(data);
      });
    }

    render() {
      const { open } = this.state;
      return (
        <>
          <br />
          <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>ADD TRAINEE</Button>
          <AddDialog open={open} onClose={this.handleClose} onSubmit={() => this.handleSubmit} />
        </>
      );
    }
}
>>>>>>> d9bd77ca864716c7fc0141e58dd432ce4e8b93f0
