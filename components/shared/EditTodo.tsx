"use client";

import Form from '../ui/Form';
import Button from '../ui/Button';
import { edit } from '@/app/actions/todoActions';
import { todoType } from '@/types/todoType';
import { BiEdit } from "react-icons/bi";
import React, { useState } from 'react';
import Input from '../ui/Input';

const EditTodo = ({ todo }: { todo: todoType }) => {

    const [editTodo, setEditTodo] = useState(false);
    const handleEdit = () => {
        setEditTodo(!editTodo);
    }

    const handleSubmit = async () => {
        setEditTodo(false);
    };

    return (
        <div className='flex gap-5 items-center'>
            {editTodo ? (
                <Form action={edit} onSubmit={handleSubmit}>
                    <Input name='inputId' value={todo.id} type='hidden'/>
                    <div className='flex justify-center'>
                        <Input name='newTitle' type='text' placeholder='Edit todo...' />
                        <Button type='submit' text="Save" />
                    </div>
                </Form>
            ) : <Button onClick={handleEdit} text={<BiEdit />} actionButton />}
        </div>
      );   
}

export default EditTodo
