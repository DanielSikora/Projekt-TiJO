import request from 'supertest';
import app from '../app';



describe('Create post endpoint', () => {
  it('should create a post and respond with 200 status code', async () => {
    // Given
    const postData = {
      title: 'Test Post',
      image: 'test-image.jpg',
      text: 'This is a test post',
      rozmiar: 10,
      price: 20,
    };
  
    // When
    const response = await request(app)
      .post('/api/posts')
      .send(postData);
  
    // Then
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined(); 
    expect(response.body).toBeTruthy(); 
  });
  it('should retrieve all posts and respond with 200 status code', async () => {
    // Given
  
    // When - wykonanie operacji pobrania wszystkich postów
    const response = await request(app)
      .get('/api/posts');
  
    // Then - weryfikacja odpowiedzi
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined(); // Sprawdź, czy ciało odpowiedzi jest zdefiniowane
    expect(Array.isArray(response.body)).toBeTruthy(); // Sprawdź, czy ciało odpowiedzi jest tablicą
    
  });
  it('should retrieve a single post and respond with 200 status code', async () => {
    // Given - przygotowanie danych (np. znalezienie istniejącego posta)
  
    // When - wykonanie operacji pobrania pojedynczego postu
    const response = await request(app)
      .get('/api/posts/55f3f2ce800e141f21ddf65'); 
  
    // Then - weryfikacja odpowiedzi
    expect(response.status).toBe(200);
    
  });
  it('should retrieve a single post', async () => {
    // Given 
    // When
    const response = await request(app)
      .get('/api/posts/655f3e50e800e141f21ddf4e');
    // Then
    expect(response.status).toBe(200);
    expect(response.body.title).toBe('asdasd');
  });
  it('should handle errors for updating a non-existent post', async () => {
    // Given - nieistniejące ID posta lub nieprawidłowe dane

    // When
    const updatedData = {
      // dane do aktualizacji posta, użyj nieistniejącego ID lub innych danych
    };
    const response = await request(app)
      .put('/api/posts/wadasdad')
      .send(updatedData);
  
    // Then
    expect(response.status).toBe(404);
    // Oczekujemy statusu 404, ponieważ nie ma posta do aktualizacji

  });
  it('should handle errors for creating a post without data', async () => {
    // Given - niekompletne dane posta

    // When
    const incompletePostData = {
      // Brak jednego lub więcej pól wymaganych
    };
    const response = await request(app)
      .post('/api/posts')
      .send(incompletePostData);

    // Then
    expect(response.status).toBe(400);
    // Oczekujemy statusu 400, ponieważ dane są niekompletne

  });
  it('should handle errors for updating a post with invalid ID', async () => {
    // Given - nieprawidłowe ID posta

    // When
    const updatedData = {
      // dane do aktualizacji posta, użyj nieprawidłowego ID lub innych danych
    };
    const response = await request(app)
      .put('/api/posts/invalid_id')
      .send(updatedData);
  
    // Then
    expect(response.status).toBe(404);
    // Oczekujemy statusu 404, ponieważ podane ID jest nieprawidłowe

  });
  it('should handle errors for deleting without ID', async () => {
    // Given - nieistniejące ID posta

    // When
    const response = await request(app)
      .delete('/api/posts');
  
    // Then
    expect(response.status).toBe(404);
    
  });
  it('should handle errors for deleting a non-existent post by ID', async () => {
    // Given - nieistniejące ID posta

    // When
    const response = await request(app)
      .delete('/api/posts/234234243');
  
    // Then
    expect(response.status).toBe(400);
    
  });
  it('should handle errors for creating a post with incomplete data', async () => {
    // Given - niekompletne dane posta

    // When
    const incompletePostData = {
      title: 'Test Post',
    };
    const response = await request(app)
      .post('/api/posts')
      .send(incompletePostData);

    // Then
    expect(response.status).toBe(400);
    // Oczekujemy statusu 400, ponieważ dane są niekompletne

  });


  
  it('should retrieve posts sorted by date in descending order', async () => {
    // Given - pobieranie postów posortowanych według daty w kolejności malejącej

    // When
    const response = await request(app)
      .get('/api/posts?sortBy=date&order=desc');

    // Then
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
    expect(Array.isArray(response.body)).toBeTruthy();
    // Dodatkowo sprawdzamy, czy posty są posortowane poprawnie
    const dates = response.body.map(post => new Date(post.date));
    expect(dates).toEqual([...dates].sort((a, b) => b - a));
  });

  it('should create a post with valid data and respond with 200 status code', async () => {
    // Given
    const postData = {
      title: 'New post',
      image: 'new-post.jpg',
      text: 'This is a new test post',
      rozmiar: 12,
      price: 30,
    };
  
    // When
    const response = await request(app)
      .post('/api/posts')
      .send(postData);
  
    // Then
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined(); 
    expect(response.body).toBeTruthy(); 
  });
 
  
  it('should handle errors for deleting without post and ID', async () => {
    // Given - nieistniejące ID posta

    // When
    const response = await request(app)
      .delete('/api');
  
    // Then
    expect(response.status).toBe(404);
    
  });

  it('should delete all shoes with size 52', async () => {
    // Given
    const responseGet = await request(app)
      .get('/api/posts')
      .query({ rozmiar: 52 });

    // When
    expect(responseGet.status).toBe(200);
    expect(responseGet.body).toBeInstanceOf(Array);

    // Then
    const shoesToDelete = responseGet.body;
    const deletePromises = shoesToDelete.map((shoe) =>
    request(app).delete(`/api/posts/${shoe._id}`)
    );
  });
 
  it('should retrieve all posts and respond with 200 status code', async () => {
    // Given
  
    // When - wykonanie operacji pobrania wszystkich postów
    const response = await request(app)
      .get('/api/posts');
  
    // Then - weryfikacja odpowiedzi
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined(); 
    expect(Array.isArray(response.body)).toBeTruthy();
    
  });

  it('should handle errors for deleting a specific post by ID', async () => {
    // Given - istniejące ID posta (np. ID równa 10)
  
    // When
    const postIdToDelete = '10'; // Załóżmy, że post o ID 10 istnieje
    const response = await request(app)
      .delete(`/api/posts/${postIdToDelete}`);
  
    // Then
    expect(response.status).toBe(400);
  });
  
  it('should handle errors for deleting posts within the range of IDs 10 to 15', async () => {
    // Given - zakres ID postów (od 10 do 15)
  
    const startId = 10;
    const endId = 15;
  
    // When - usuń posty dla każdego ID w zakresie
    for (let postId = startId; postId <= endId; postId++) {
      const response = await request(app)
        .delete(`/api/posts/${postId}`);
  
      // Then - oczekujemy statusu 400 dla każdego usunięcia
      expect(response.status).toBe(400);
    }
  });
  
  it('should handle errors for creating a post with invalid price', async () => {
    // Given - nieprawidłowe dane, gdzie price nie jest liczbą
    const postData = {
      title: 'Test Post',
      image: 'test-image.jpg',
      text: 'This is a test post',
      rozmiar: 10,
      price: 'InvalidPrice', // price ustawione jako ciąg znaków
    };
  
    // When - próba utworzenia posta
    const response = await request(app)
      .post('/api/posts')
      .send(postData);
  
    // Then - sprawdzenie, czy otrzymano odpowiedni błąd
    expect(response.status).toBe(500);
  });
  
  it('should handle errors for creating a post with invalid price', async () => {
    // Given - nieprawidłowe dane, gdzie price nie jest liczbą
    const postData = {
      title: 'Test Post',
      image: 'test-image.jpg',
      text: 'This is a test post',
      rozmiar: 'InvalidPrice', // invalid
      price: 50, 
    };
  
    // When - próba utworzenia posta
    const response = await request(app)
      .post('/api/posts')
      .send(postData);
  
    // Then - sprawdzenie, czy otrzymano odpowiedni błąd
    expect(response.status).toBe(500);
  });
  
  it('should handle errors for creating a post not in the correct place', async () => {
    // Given - niekompletne dane posta

    // When
    const incompletePostData = {
      title: 'Test Post',
    };
    const response = await request(app)
      .post('/api')
      .send(incompletePostData);

    // Then
    expect(response.status).toBe(404);

  });
  
});
