import React, {Component} from 'react';
import { TableRow, TableCell } from "@material-ui/core";
import Delete from "./Actions/Delete/Delete";
import Actions from "./Actions/Actions";

export default class RowContacts extends Component {
    render() {
        const { id, name, surname, phone } = this.props.contact;
        return (
            <TableRow>
                <TableCell component="th" scope="row">
                    {name}
                </TableCell>
                <TableCell align="left">{surname}</TableCell>
                <TableCell align="left"><a href={`tel:${phone}`}>{phone}</a></TableCell>
                <TableCell align="right" style={{padding: '5px' }}>
                    <Actions type="edit" contact={this.props.contact} action={this.props.action}/>
                    <Delete delete={this.props.delete} id={id}/>
                </TableCell>
            </TableRow>
        );
    }
}