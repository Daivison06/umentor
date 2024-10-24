<?php

namespace App\Repository;

use App\Models\User;
use App\Repository\Contracts\UserRepositoryInterface;
use App\Repository\Presenters\PaginationPresenter;

class UserRepository implements UserRepositoryInterface
{
    protected $model;

    public function __construct(User $user)
    {
        $this->model = $user;
    }

    /**
     * Retrieve all users.
     *
     * @return array An array containing all users.
     */
    public function findAll(): array
    {
        return $this->model->orderBy('id', 'ASC')->get()->toArray();
    }

    /**
     * Paginate users.
     *
     * @param int $page The page number to retrieve (default is 1).
     * @return PaginationPresenter The paginated results.
     */
    public function paginate(\Illuminate\Database\Eloquent\Builder $query, int $page = 1): PaginationPresenter
    {
        return new PaginationPresenter($query->orderBy('id', 'DESC')->paginate());
    }

    /**
     * Create new user.
     *
     * @param array $data An array of user data to be stored.
     * @return object The newly created user object.
     */
    public function create(array $data): object
    {
        return $this->model->create($data);
    }

    /**
     * Update an existing user.
     *
     * @param string $id The ID of the user to be updated.
     * @param array $data An array of user data to update.
     * @return object The updated user object.
     */
    public function update(string $id, array $data): object
    {
        $user = $this->find($id);
        $user->update($data);
        $user->refresh();

        return $user;
    }

    /**
     * Delete user.
     *
     * @param string $id The ID of the user to be deleted.
     * @return bool True if deletion was successful, false otherwise.
     */
    public function delete(string $id): bool
    {
        return $this->find($id)->delete();
    }

    /**
     * Find user by ID.
     *
     * @param string $id The ID of the user to be found.
     * @return object The found user object.
     */
    public function find(string $id): object
    {
        return $this->model->find($id);
    }

    /**
     * Search users by generic term.
     *
     * @param string|null $search
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function search(?string $search, ?string $status): \Illuminate\Database\Eloquent\Builder
    {
        $query = $this->model->query();

        if (!empty($search)) {
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', '%' . $search . '%')
                ->orWhere('email', 'like', '%' . $search . '%');
            });
        }

        if ($status !== null && $status !== '') {
            $query->where('status', $status);
        }

        return $query;
    }
}
