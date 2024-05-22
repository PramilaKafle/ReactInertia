import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState, useEffect } from 'react';

import { Inertia } from '@inertiajs/inertia';
import axios from 'axios';
export default function Product({ auth, product }) {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');


    useEffect(() => {
        if (product) {
            setName(product.name);
            setPrice(product.price);
            setDescription(product.description);
        }
    }, [product]);


    const data = { name, price, description };
    function handleSubmit(e) {
        e.preventDefault();
        console.log(data);
        if (product) {
            // Edit existing product
            Inertia.put(route('products.update', product.id), data);
        } else {
            // Create new product
            Inertia.post(route('products.store'), data);
        }
    }


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{product ? 'Edit Product' : 'Add Product'} </h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="card mx-4">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-ms-6">
                                    <h4>{product ? 'Edit Product' : 'Add Product'}</h4>
                                </div>
                                <div className="col-ms-6  d-flex justify-content-end">
                                    <Link href={route('products.index')} className="btn btn-secondary"> Back</Link>
                                </div>

                            </div>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="row mb-4">
                                    <div className="col">
                                        <div data-mdb-input-init="" className="form-outline">
                                            <input type="text" id="name" className="form-control"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)} />
                                            <label className="form-label" htmlFor="name">
                                                Name
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div data-mdb-input-init="" className="form-outline">
                                            <input type="text" id="price" className="form-control"
                                                value={price}
                                                onChange={(e) => setPrice(e.target.value)} />
                                            <label className="form-label" htmlFor="price">
                                                Price
                                            </label>
                                        </div>
                                    </div>
                                </div>


                                <div data-mdb-input-init="" className="form-outline mb-4">
                                    <textarea name="description" id="description" className="form-control"

                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}></textarea>
                                    <label className="form-label" htmlFor="description">
                                        Description
                                    </label>
                                </div>


                                {/* Submit button */}
                                <button
                                    data-mdb-ripple-init=""
                                    type="submit"
                                    className="btn btn-primary btn-block mb-4"
                                >
                                    Add Product
                                </button>


                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </AuthenticatedLayout >
    );
}
