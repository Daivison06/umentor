<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserStoreRequest;
use App\Http\Requests\UserUpdateRequest;
use App\Http\Resources\UserResource;
use App\Http\Traits\PaginateResources;
use App\Repository\Contracts\UserRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class UserController extends Controller
{
    use PaginateResources;
    protected $repository;

    public function __construct(UserRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        $search = $request->query('search', '');
        $status = $request->query('status', '');
        $query = $this->repository->search($search, $status);

        $response = $this->repository->paginate($query);
        $result = UserResource::collection(collect($response->items()));

        return $this->withPagination($result, $response);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param UserStoreRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(UserStoreRequest $request): \Illuminate\Http\JsonResponse
    {
        $user = $this->repository->create($request->validated());
        return (new UserResource($user))
            ->response()->setStatusCode(Response::HTTP_CREATED);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UserUpdateRequest $request, int $id): \Illuminate\Http\JsonResponse
    {
        $response = $this->repository->update($id, $request->validated());

        return (new UserResource($response))
            ->response();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        $this->repository->delete($id);
        return response()->noContent();
    }
}
