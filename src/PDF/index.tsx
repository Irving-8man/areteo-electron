import React, { Component } from "react";
import { render } from "react-dom";
import Document from "./Document";
import "./style.css";

import { saveAs } from "file-saver";
import { Packer } from "docx";
import { DocumentCreator } from "./cv-generator";

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  generate(): void {
    const documentCreator = new DocumentCreator();
    const doc = documentCreator.create([
     
    ]);

    Packer.toBlob(doc).then(blob => {
      console.log(blob);
      saveAs(blob, "DOC.docx");
      console.log("Documento creado satifactoriamente");
    });
  }

  render() {
    return (
      <div>
        <Document name={this.state.name} />
        <p>
          Descargue aquí el documento :)
          <button onClick={this.generate}>Generar documento!</button>
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
