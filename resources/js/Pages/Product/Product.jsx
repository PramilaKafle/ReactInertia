import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';

export default function Product({ auth, props }) {

    const { products } = usePage().props;
    var sl = 0;

    const handleDelete = (id) => {

        Inertia.delete(route("products.destroy", id));

    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Product</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">

                        <Link href={route('products.create')} className="btn btn-success  mt-2 mb-3">Add Product</Link>

                        <table className="table">
                            <thead>
                                <tr>
                                    <th>SN</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(product => (
                                    <tr key={product.id}>
                                        <td>{++sl}</td>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.description}</td>
                                        <td>
                                            <Link className='btn btn-success mx-1' href={route("products.edit", product.id)}>Edit</Link>
                                            <button className='btn btn-danger mx-1' onClick={() => handleDelete(product.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}


                            </tbody>
                        </table>

                    </div>


                </div>
            </div>
        </AuthenticatedLayout >
    );
}
