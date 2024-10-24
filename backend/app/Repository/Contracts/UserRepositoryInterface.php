<?php

namespace App\Repository\Contracts;

interface UserRepositoryInterface
{
    public function findAll(): array;
    public function paginate(\Illuminate\Database\Eloquent\Builder $query, int $page = 1): PaginationInterface;
    public function create(array $data): object;
    public function update(string $email, array $data): object;
    public function delete(string $email): bool;
    public function find(string $email): object;
    public function search(string $search, string $status): object;
}
