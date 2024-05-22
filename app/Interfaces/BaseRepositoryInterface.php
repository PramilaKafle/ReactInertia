<?php
namespace App\Interfaces;

Interface BaseRepositoryInterface
{
    public function all();
    public function store( array $data);
    public function getById(string $id);
    public function update(array $data,string $id);
    public function delete(string $id);
}