import React, { Component } from "react";
// import Modal from "../components/Modal";
import AddFood from "../components/AddFood";
import axios from "axios";

class FoodItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCategory: false,
      activeItem: {
        title: "",
        description: "",
        Category: ["all", "vegetables", "fruit", "dairy & eggs"]
      },
      foodList: [
        {
            id: 1,
            title: "food 1",
            description: "Buy ingredients to prepare dinner",
          },
          {
            id: 2,
            title: "food 2",
            description: "Read Algebra and History textbook for upcoming test",
          }
      ]
    };
  }
  componentDidMount() {
    this.refreshList();
  }
  refreshList = () => {
    axios
      .get("http://localhost:8000/api/todos/")
      .then(res => this.setState({ foodList: res.data }))
      .catch(err => console.log(err));
  };
  displayCategory = status => {
    if (status) {
      return this.setState({ viewCategory: true });
    }
    return this.setState({ viewCategory: false });
  };
  renderTabList = () => {
    return (
      <div className="my-5 tab-list">
        <h4 className="my-3">Filter by Category</h4>
        <span
          onClick={() => this.displayCategory(true)}
          className={this.state.viewCategory ? "active" : ""}
        >
          All
        </span>
        <span
          onClick={() => this.displayCategory(true)}
          className={this.state.viewCategory ? "" : "active"}
        >
          Vegetables
        </span>
        <span
          onClick={() => this.displayCategory(false)}
          className={this.state.viewCategory ? "" : "active"}
        >
          Fruit
        </span>
        <span
          onClick={() => this.displayCategory(false)}
          className={this.state.viewCategory ? "" : "active"}
        >
          Dairy & Eggs
        </span>
      </div>
    );
  };
  renderItems = () => {
    const { viewCategory } = this.state;
    const newItems = this.state.foodList.filter(
      item => item.Category === viewCategory
    );
    return newItems.map(item => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`todo-title mr-2 ${
            this.state.viewCategory ? "Category-todo" : ""
          }`}
          title={item.description}
        >
          {item.title}
        </span>
        <span>
          <button
            onClick={() => this.editItem(item)}
            className="btn btn-secondary mr-2"
          >
            {" "}
            Edit{" "}
          </button>
          <button
            onClick={() => this.handleDelete(item)}
            className="btn btn-danger"
          >
            Delete{" "}
          </button>
        </span>
      </li>
    ));
  };
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  handleSubmit = item => {
    this.toggle();
    if (item.id) {
      axios
        .put(`http://localhost:8000/api/todos/${item.id}/`, item)
        .then(res => this.refreshList());
      return;
    }
    axios
      .post("http://localhost:8000/api/todos/", item)
      .then(res => this.refreshList());
  };
  handleDelete = item => {
    axios
      .delete(`http://localhost:8000/api/todos/${item.id}`)
      .then(res => this.refreshList());
  };
  createItem = () => {
    const item = { title: "", description: "", Category: false };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };
  editItem = item => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };
  render() {
    return (
      <main className="content">
        <h1 className="text-uppercase text-center my-4">My Food Items</h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0 my-4">
            <div className="card p-3">
              <div className="">
                <AddFood/>
              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Broccoli
                </li>
                <li className="list-group-item">
                  Cheese
                </li>
                <li className="list-group-item">
                  Macaroni
                </li>
                <li className="list-group-item">
                  Milk
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null} */}
      </main>
    );
  }
}
export default FoodItems;