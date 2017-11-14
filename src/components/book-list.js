import React, { Component } from 'react';

export default class BookList extends component{
    
    renderList(){
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        });

    }
    
    
    render() {
        return (
            <ul classNAme="list-group col-sm-4">
                {this.renderList()}
            </ul>

        )
    }

}
