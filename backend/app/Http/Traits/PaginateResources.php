<?php

namespace App\Http\Traits;

trait PaginateResources
{
    public function withPagination($collection, $response)
    {
        return $collection->additional([
            'meta' => [
                'total' => $response->total(),
                'current_page' => $response->currentPage(),
                'last_page' => $response->lastPage(),
                'first_page' => $response->firstPage(),
                'per_page' => $response->perPage(),
            ],
        ]);
    }
}
