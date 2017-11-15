import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    
    renderList(){
        return this.props.books.map((book) => {
            return (
                <li
                    onClick={() => this.props.selectBook(book)}
                    key={book.title}
                    className="list-group-item">
                    {book.title}
                </li>
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

// Anything returned from this function will ned up as props
// on the BookList container


function mapDispatchToProps(dispatch){
    // Whenever selectBook is called, the result should be passed
    // to all of our reducers
    
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
