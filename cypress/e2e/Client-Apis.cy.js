describe('Client E2E Scenario',()=>{
    let KEY;
    let TOKEN="eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJPRkFzSFJab2RNQzhQd2toVy1fTHpKd0FGR2NXeEYxMFZRMktyV2NXLW9zIn0.eyJleHAiOjE3MDU0NDYxODQsImlhdCI6MTcwNTQyODE4NCwiYXV0aF90aW1lIjoxNzA1NDAzODA3LCJqdGkiOiIwYzAxZWE2Zi01NTRmLTQ4MWMtYTdiMy00NWNhMWZjNmNhOTMiLCJpc3MiOiJodHRwczovL3NlY3VyZS50cnVmbGEuZGV2L2F1dGgvcmVhbG1zL2Jlc3RpbnN1cmFuY2UiLCJhdWQiOlsidHJ1ZmxhOnBheW1lbnQtYXBpIiwidHJ1bWFya2V0LWFwaSIsInRydWRvY3MtYXBpIiwidHJ1d2ViLWFwaSIsInJlYWxtLW1hbmFnZW1lbnQiLCJhY2NvdW50Il0sInN1YiI6IjkyYmNiYTEyLTk4NjktNGFkNC1hMGIyLTYxZWNkNGQ3YTlhOSIsInR5cCI6IkJlYXJlciIsImF6cCI6InRydW1hcmtldC1zd2FnZ2VyIiwibm9uY2UiOiIzOWJlOTViMS00OTJiLTRmNGItYjljZC1lY2JiYmE4NDlmOTMiLCJzZXNzaW9uX3N0YXRlIjoiNTQ0N2Q0MTItNzJjZC00YmQ2LTk0OWYtMmE0OGQ5NmYzZjljIiwiYWNyIjoiMCIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL2FwaS50cnVtYXJrZXQuZGV2Il0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIiwiQ29tcGFueS1NYW5hZ2VtZW50IiwiZGVmYXVsdC1yb2xlcy1iZXN0aW5zdXJhbmNlIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsicmVhbG0tbWFuYWdlbWVudCI6eyJyb2xlcyI6WyJtYW5hZ2UtcmVhbG0iLCJtYW5hZ2UtdXNlcnMiLCJ2aWV3LWNsaWVudHMiLCJ2aWV3LWF1dGhvcml6YXRpb24iLCJtYW5hZ2UtYXV0aG9yaXphdGlvbiIsInF1ZXJ5LWNsaWVudHMiXX0sInRydWZsYTpwYXltZW50LWFwaSI6eyJyb2xlcyI6WyJ2ZW5kb3JfbWFuYWdlIiwiaW52b2ljZV9tYW5hZ2UiLCJpbnZvaWNlX3ZpZXciLCJjb25maWd1cmF0aW9uX3ZpZXciLCJtZXRob2RfdmlldyIsInBsYW5fbWFuYWdlIiwicGxhbl92aWV3IiwiYXVkaXRfdmlldyIsInByb2R1Y3RfdmlldyIsInJlZnVuZF92aWV3IiwibWV0aG9kX21hbmFnZSIsImNvbmZpZ3VyYXRpb25fbWFuYWdlIiwidmVuZG9yX3ZpZXciLCJzdHJhdGVneV9tYW5hZ2UiLCJyZWZ1bmRfbWFuYWdlIiwic3RyYXRlZ3lfdmlldyIsInByb2R1Y3RfbWFuYWdlIiwidHJhbnNhY3Rpb25fdmlldyJdfSwidHJ1bWFya2V0LWFwaSI6eyJyb2xlcyI6WyJpbnZvaWNlX21hbmFnZSIsIm1ldGhvZF92aWV3IiwicmVxdWVzdC1pbnN0YW5jZV9tYW5hZ2VfYXNzaWduZWQiLCJsb2NhdGlvbl92aWV3IiwicHJvZHVjdC1kZWZpbml0aW9uX3ZpZXciLCJhdHRhY2htZW50X21hbmFnZSIsImFmZmlsaWF0ZV92aWV3IiwicGxhbl9tYW5hZ2UiLCJhY3Rpdml0eV9tYW5hZ2UiLCJjb21wYW55X21hbmFnZSIsImFjdGlvbl9tYW5hZ2UiLCJndWVzdC11c2VyX3ZpZXciLCJyb2xlX21hbmFnZSIsImNsaWVudF9tYW5hZ2UiLCJ1c2VyX21hbmFnZSIsInVzZXItcXVlcnlfdmlldyIsImNvbXBhbnlfdmlldyIsInNlcnZpY2UtdXNlcl92aWV3IiwiaW52b2ljZV92aWV3IiwicmVxdWVzdC1kZWZpbml0aW9uX3ZpZXdfYXNzaWduZWQiLCJhZmZpbGlhdGUtdXNlcl9tYW5hZ2UiLCJzaGFyZWQtcmVxdWVzdC1pbnN0YW5jZV9tYW5hZ2UiLCJhdHRhY2htZW50X3ZpZXciLCJ1c2VyX3ZpZXciLCJhZmZpbGlhdGVfbWFuYWdlIiwicHJvZHVjdC1pbnN0YW5jZV9tYW5hZ2UiLCJhZmZpbGlhdGUtdXNlcl92aWV3IiwicGxhbl92aWV3IiwiYWRtaW4tdGVhbV9tYW5hZ2UiLCJyZXF1ZXN0LWluc3RhbmNlX3ZpZXctc2hhcmVkIiwic2VydmljZS11c2VyX21hbmFnZSIsInVzZXItcXVlcnlfbWFuYWdlIiwiYWN0aXZpdHktdHlwZV92aWV3IiwiYWZmaWxpYXRlLXJlcXVlc3QtaW5zdGFuY2VfdmlldyIsIm5vdGlmaWNhdGlvbl92aWV3IiwicmVxdWVzdC1kZWZpbml0aW9uX21hbmFnZSIsInJlcXVlc3QtaW5zdGFuY2VfdmlldyIsInRyYW5zYWN0aW9uX3ZpZXciLCJwcm9kdWN0LWRlZmluaXRpb25fdmlld19hc3NpZ25lZCIsImNsaWVudF92aWV3IiwidGVhbV92aWV3IiwiY29uZmlndXJhdGlvbl92aWV3Iiwicm9sZV92aWV3IiwiYWZmaWxpYXRlLXJlcXVlc3QtaW5zdGFuY2VfbWFuYWdlIiwicmVxdWVzdC1pbnN0YW5jZV9hc3NpZ24iLCJyZXF1ZXN0LWluc3RhbmNlX21hbmFnZSIsInJlcXVlc3QtbG9nX3ZpZXciLCJtYXJrZXRfdmlldyIsInJlcXVlc3QtbG9nX21hbmFnZSIsImNvbmZpZ3VyYXRpb25fbWFuYWdlIiwicHJvZHVjdC1pbnN0YW5jZV92aWV3IiwidGVhbV9tYW5hZ2UiLCJyZXF1ZXN0LWRlZmluaXRpb25fdmlldyIsInJlcXVlc3QtaW5zdGFuY2VfYXNzaWduLW15c2VsZiIsImFjdGlvbl92aWV3IiwiYWRtaW4tdGVhbV92aWV3IiwiYXVkaXRfdmlldyIsImFjdGl2aXR5X3ZpZXciLCJyZXF1ZXN0LWluc3RhbmNlX21hbmFnZS1zaGFyZWQiLCJtYXJrZXRfbWFuYWdlIiwibWV0aG9kX21hbmFnZSIsImxvY2F0aW9uX21hbmFnZSIsInJlcXVlc3QtaW5zdGFuY2VfZm9yY2UtYXNzaWduIiwiYWRtaW4tcm9sZV92aWV3Iiwibm90aWZpY2F0aW9uX21hbmFnZSIsImFkbWluLXJvbGVfbWFuYWdlIiwid2Vic2l0ZV9tYW5hZ2UiLCJwcm9kdWN0LWRlZmluaXRpb25fbWFuYWdlIiwiZ3Vlc3QtdXNlcl9tYW5hZ2UiLCJzaGFyZWQtcmVxdWVzdC1pbnN0YW5jZV92aWV3IiwibGlzdF9tYW5hZ2UiLCJyZXF1ZXN0LWluc3RhbmNlX2ZvcmNlLWFzc2lnbi1teXNlbGYiXX0sInRydXdlYi1hcGkiOnsicm9sZXMiOlsicG9zdF9tYW5hZ2UiLCJjdXN0b21pemVfbWFuYWdlIiwicG9zdF92aWV3IiwidW1hX3Byb3RlY3Rpb24iLCJwbHVnaW5zX21hbmFnZSIsInBhZ2VfbWFuYWdlIiwibWFya2V0cGxhY2VfbWFuYWdlIiwibWVkaWFfbWFuYWdlIiwicHJpdmF0ZV9wbHVnaW5zX21hbmFnZSIsImFkbWluX21hbmFnZSIsInRoZW1lX21hbmFnZSIsImNhdGVnb3J5X21hbmFnZSIsImxpbmtfbWFuYWdlIiwiYWRtaW5fdmlldyIsImNvbW1lbnRfbWFuYWdlIiwicGFnZV92aWV3IiwibWFya2V0cGxhY2VfdmlldyJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgdHJ1d2ViIHRlbmFudC1pbmZvIHBheW1lbnQgZW1haWwgdHJ1bWFya2V0IHByb2ZpbGUiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZGF0ZXRpbWVGb3JtYXQiOiJMTEwgZGQsIHl5eXkgLSBoaDptbSBhIiwicmVhbG1OYW1lIjoiQmVzdCBJbnN1cmFuY2UiLCJncm91cHMiOlsiL2NvbXBhbnkvdGVhbXMvSW1wbGVtZW50YXRpb24gVGVhbSIsIi9jb21wYW55L3RlYW1zL01hbmNoZXN0ZXIgQWRtaW4iLCIvY29tcGFueS90ZWFtcy9UcnVmbGEgQWRtaW5zIiwiL2NvbXBhbnkvbG9jYXRpb25zL1RydWZsYSBMb2NhdGlvbiIsIi9jb21wYW55L2xvY2F0aW9ucy9pbXBsZW1lbnRhdGlvbiBFZ3lwdCJdLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ6eWFkLmFAdHJ1ZmxhLmNvbSIsImxvY2FsZSI6ImVuLUdCIiwiZ2l2ZW5fbmFtZSI6Ilp5YWQiLCJuYW1lIjoiWnlhZCBBaG1lZCIsImN1cnJlbmN5IjoiQ0FEIiwicmVhbG0iOiJiZXN0aW5zdXJhbmNlIiwidXNlclR5cGUiOiJzeXN0ZW0iLCJmYW1pbHlfbmFtZSI6IkFobWVkIiwiZW1haWwiOiJ6eWFkLmFAdHJ1ZmxhLmNvbSJ9.ACSMErVdPBcsGEBoY6EI6ew2_HgEGNZjYUH7XUKt9xfla3CBUiEE0ZTR7ndWfb3FX49gi_9RDHN_S7TkjMvNGXEDOuFaG4mnbwJzLMHpsmXUf_gt-IWFd4WPqzGHkw45u19ZMM5ySdIAfz5sXBVNWnjWfO2u9NTe1caz_tM12ceNLmi8jNmwsJtTgPs11xy6EL_0xX6-b6f9lcS-_QRuKAkkCeHyo-gj6oWAlGCXrCf_SIE6ysypAl0qFMKYH8a5T7oJgNAoU90WxFW7HGKgJfH1pf7cePSEZPAEXBOyswIuKqV_x88xPShheOdAH3QW1xkAOyzigQ3YHEDa6EfpZg"
   const Headers={
    Authorization:`Bearer ${TOKEN}`
   }
   const Body={
    "name": "Mahmoud60",
    "email": "seniors150@tst.com"
   }
   
    it('Create new Client',()=>{
    cy.request({method:"POST",
     url:"https://api.trumarket.dev/client-management/clients",
      headers:Headers,
      body:Body 
    }).then((Response)=>{
       expect(Response.status).to.eql(201);
            KEY=Response.body.data.key;
             //console.log("Client Created Successfully");
        })
  })

  it('Get Client by Key',()=>{
      cy.request({
        method:"GET",
        url:`https://api.trumarket.dev/client-management/clients/${KEY}`, 
       // url:"https://api.trumarket.dev/client-management/clients/${KEY}"
        /*qs:{
          "key":KEY },*/
        headers:Headers
      }).then((Response)=>{
        expect(Response.status).to.eql(200);
        console.log("Get Works Well");
      })
  });
  it('Edit Client Info',()=>{
    cy.request({
        method:"PATCH",
        url:"https://api.trumarket.dev/client-management/clients/",
         qs:{
          "key":KEY},
          headers:Headers,
         body:{
          "data": {
            "name": "7odaedited"
          }
        },
        
        
    }).then((Response)=>{
        expect(Response.status).to.eql(204);
        console.log("Client name Changed successfully")
    })
  });
  it('Delete Client',()=>{
    cy.request({
        method:"DELETE",
        url:"https://api.trumarket.dev/client-management/clients/",
        headers:{
          Authorization:`Bearer ${TOKEN}`

      }, qs:{
        "key":KEY},
    }).then((Response)=>{
        expect(Response.status).to.eql(204);
        console.log("Client Deleted");
    })
  })
})