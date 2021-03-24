import React, {Component} from 'react';
import {WebView} from 'react-native-webview';
import {ActivityIndicator, StyleSheet} from 'react-native';

class Browser extends Component {
  LoadingIndicatorView() {
    return (
      <ActivityIndicator
        color="#009b88"
        // size="large"
        style={styles.ActivityIndicatorStyle}
      />
    );
  }

  render() {
    // const { params } = this.props.navigation.state

    return (
      <WebView
        source={{
          uri:
            'https://connect.zabo.com/connect?client_id=ReB86qmztLxMSxThxmuC9aj1Vhmf30S90jOaJOgd0c1Hka3EHlBRnmyrYfpcJ4zt&origin=localhost&zabo_env=sandbox&zabo_version=latest',
        }}
        // renderLoading={this.LoadingIndicatorView}
        // startInLoadingState
        // startInLoadingState={true}
        // onNavigationStateChange={(state) => {
        //   console.log('--> onNavigationStateChange', state.url)
        // }}
      />
    );
  }
}

const styles = StyleSheet.create({
  ActivityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Browser;
