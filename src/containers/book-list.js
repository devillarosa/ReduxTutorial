import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
    
    renderList(){
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        });
    }
    
    
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    // Whatever is returend willl show up as props
    // inside of Booklist
    
    // 1. If the state ever changes, this container will re-render with the list of books
    // 2. Wheenver the application state changes, the object in the state function
    // will be assigned as props in the component

    return {
        books: state.books
    };
}

export default connect(mapStateToProps)(BookList);
