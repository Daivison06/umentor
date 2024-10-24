<?php

namespace Tests\Unit;

use App\Models\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UserTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_can_create_user()
    {

        $user = User::factory()->create();

        $this->assertInstanceOf(User::class, $user);
        $this->assertNotEmpty($user->name);
        $this->assertNotEmpty($user->email);
        $this->assertIsBool($user->status);
        $this->assertNotEmpty($user->admission_date);
    }

    public function test_user_can_be_updated()
    {
        $user = User::factory()->create();

        $updatedData = [
            'name' => 'New name',
            'email' => 'newmail@example.com',
        ];

        $user->update($updatedData);
        $updatedUser = User::find($user->id);

        $this->assertEquals('New name', $updatedUser->name);
        $this->assertEquals('newmail@example.com', $updatedUser->email);
    }

    public function test_user_can_be_deleted()
    {
        $user = User::factory()->create();
        $user->delete();

        $this->assertDatabaseMissing('users', ['id' => $user->id]);
        $this->expectException(ModelNotFoundException::class);
        User::findOrFail($user->id);
    }
}
