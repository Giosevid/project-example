import React, { Component } from "react";
import { View, Text } from "react-native";
import t from "tcomb-form-native";
import { Button, Card } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from 'react-redux';
import Login from "./actions";

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  password: t.String
});

var options = {
  fields: {
    email: {
      placeholder: "email",
      error: 'Introduzca email'
    },
    password: {
      placeholder: "password",
      error: 'Introduzca password'
    },
  }
};

class Home extends Component {
  handleSubmit = () => {
    var value = this.refs.form.getValue();
    if (value) {
      if (value.email === 'Giosevid'){
        this.props.loginAction(value);
        this.props.navigation.navigate('Details');
      }else {

      }
    }
  };
  render() {
    return (
      <View>
        <Card>
          <Text>Inicio de Sesion</Text>
          <Form ref="form" type={User} options={options} />
          <Button
            icon={<Icon name="arrow-right" size={15} color="white" />}
            iconRight
            title="Aceptar"
            onPress={this.handleSubmit}
          />
        </Card>
      </View>
    );
  }

}

const mapStateToProps = state => ({
  login: state.loginReducer
})

const mapDispatchToProps = dispatch => ({
  loginAction: data => dispatch(Login(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)