<?php

namespace App\Repositories;

use App\Interfaces\BaseRepositoryInterface;
use Illuminate\Database\Eloquent\Model;

class BaseRepository implements BaseRepositoryInterface
{
    private $model;

    public function __construct(Model $model)
    {
        $this->model = $model;
    }


    public function all()
    {
        return $this->model->all();
    }
    public function store(array $data)
    {
        return $this->model::create($data);
    }

    public function getById(string $id)
    {
        return $this->model::find($id);
    }
    public function update(array $data, string $id)
    {
        $record = $this->model::findOrFail($id);
        $record->update($data);  

    }
    public function delete(string $id)
    {
        $record = $this->model::find($id);
        return $record->delete();
    }
}