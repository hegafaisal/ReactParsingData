import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    const urlFetch = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (urlFetch.status === 200 && "json" in urlFetch) {
      this.setStateAsync({
        data: await urlFetch.json(),
      });
    }
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="h-body">
        <div className="h-header">
          <div className="h-title">Parsing Data</div>
          by Hega Faisal Agustian
        </div>
        <div className="h-space">
          {data.length > 0
            ? data.map((item) => {
                const { userId, id, title, body } = item;
                return (
                  <div key={id} className="h-item">
                    <table border="0" width="100%">
                      <tr>
                        <td width="6%">User Id</td>
                        <td width="2%">:</td>
                        <td width="92%">{userId}</td>
                      </tr>
                      <tr>
                        <td width="6%">Id</td>
                        <td width="2%">:</td>
                        <td width="92%">{id}</td>
                      </tr>
                      <tr>
                        <td width="6%">Title</td>
                        <td width="2%">:</td>
                        <td width="92%">{title}</td>
                      </tr>
                      <tr>
                        <td width="6%" valign="top">
                          Body
                        </td>
                        <td width="2%" valign="top">
                          :
                        </td>
                        <td width="92%">{body}</td>
                      </tr>
                    </table>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    );
  }
}
export default App;
