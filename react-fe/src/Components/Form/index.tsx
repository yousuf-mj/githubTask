import React from "react";
import axios from "axios";
import "./Form.scss";

export default class Form extends React.Component {
    state = { username: "" };

    handleSubmit = async (event: any) => {
        event.preventDefault();
        const baseUrl = process.env.REACT_APP_API_URL || "";

        if (!baseUrl) throw new Error("settings error");

        const username = this.state.username;
        const url = `${baseUrl}/api/user`;
        try {
            const resp = await axios.post(url, { username });
            this.setState({ username: "" });
        } catch (error) {
            console.error({ message: "error with form", error });
            alert("error with form submit");
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.username}
                    onChange={(event) =>
                        this.setState({ username: event.target.value })
                    }
                    placeholder="Enter Github username"
                />

                <button>Search</button>
            </form>
        );
    }
}
