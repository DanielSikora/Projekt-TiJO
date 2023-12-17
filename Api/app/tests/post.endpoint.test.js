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
  
    // When 
    const response = await request(app)
      .get('/api/posts');
  
    // Then 
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined(); 
    expect(Array.isArray(response.body)).toBeTruthy(); 
    
  });
  it('should retrieve a single post and respond with 200 status code', async () => {
    // Given - istniejący post
  
    // When 
    const response = await request(app)
      .get('/api/posts/55f3f2ce800e141f21ddf65'); 
  
    // Then 
    expect(response.status).toBe(200);
    
  });
  it('should retrieve a single post', async () => {
    // Given istneijący post
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
      
    };
    const response = await request(app)
      .put('/api/posts/wadasdad')
      .send(updatedData);
  
    // Then
    expect(response.status).toBe(404);
    

  });
  it('should handle errors for creating a post without data', async () => {
    // Given - niekompletne dane posta

    // When
    const incompletePostData = {
      
    };
    const response = await request(app)
      .post('/api/posts')
      .send(incompletePostData);

    // Then
    expect(response.status).toBe(400);
    

  });
  it('should handle errors for updating a post with invalid ID', async () => {
    // Given - nieprawidłowe ID posta

    // When
    const updatedData = {
      
    };
    const response = await request(app)
      .put('/api/posts/invalid_id')
      .send(updatedData);
  
    // Then
    expect(response.status).toBe(404);
    

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
    

  });


  
  
 

  
  
  
  
});
