from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.mixins import UpdateModelMixin, DestroyModelMixin

from .models import PCParts
from .serializers import PCPartsSerializer


class PCPartsListView(
  APIView, # Basic View class provided by the Django Rest Framework
  UpdateModelMixin, # Mixin that allows the basic APIView to handle PUT HTTP requests
  DestroyModelMixin, # Mixin that allows the basic APIView to handle DELETE HTTP requests
):

  def get(self, request, id=None):
    if id:
      # If an id is provided in the GET request, retrieve the PC Part by that id
      try:
        # Check if the PC Part the user wants to update exists
        queryset = PCParts.objects.get(id=id)
      except PCParts.DoesNotExist:
        # If the PC Part does not exist, return an error response
        return Response({'errors': 'This PC Part does not exist.'}, status=400)

      # Serialize PC Part from Django queryset object to JSON formatted data
      read_serializer = PCPartsSerializer(queryset)

    else:
      # Get all PC Part from the database using Django's model ORM
      queryset = PCParts.objects.all()

      # Serialize list of PC Part from Django queryset object to JSON formatted data
      read_serializer = PCPartsSerializer(queryset, many=True)

    # Return a HTTP response object with the list of PC Parts as JSON
    return Response(read_serializer.data)


  def post(self, request):
    # Pass JSON data from user POST request to serializer for validation
    create_serializer = PCPartsSerializer(data=request.data)

    # Check if user POST data passes validation checks from serializer
    if create_serializer.is_valid():

      # If user data is valid, create a new PC Part record in the database
      pc_part_object = create_serializer.save()

      # Serialize the new PC Part from a Python object to JSON format
      read_serializer = PCPartsSerializer(pc_part_object)

      # Return a HTTP response with the newly created PC Part data
      return Response(read_serializer.data, status=201)

    # If the users POST data is not valid, return a 400 response with an error message
    return Response(create_serializer.errors, status=400)


  def put(self, request, id=None):
    try:
      # Check if the PC Part the user wants to update exists
      pc_part = PCParts.objects.get(id=id)
    except PCParts.DoesNotExist:
      # If the PC Part does not exist, return an error response
      return Response({'errors': 'This PC Part does not exist.'}, status=400)

    # If the PC Part does exists, use the serializer to validate the updated data
    update_serializer = PCPartsSerializer(pc_part, data=request.data)

    # If the data to update the PC Part is valid, proceed to saving data to the database
    if update_serializer.is_valid():

      # Data was valid, update the PC Part in the database
      pc_part_object = update_serializer.save()

      # Serialize the PC Part from Python object to JSON format
      read_serializer = PCPartsSerializer(pc_part_object)

      # Return a HTTP response with the newly updated PC Part
      return Response(read_serializer.data, status=200)

    # If the update data is not valid, return an error response
    return Response(update_serializer.errors, status=400)


  def delete(self, request, id=None):
    try:
      # Check if the PC Part the user wants to update exists
      pc_part = PCParts.objects.get(id=id)
    except PCParts.DoesNotExist:
      # If the PC Part does not exist, return an error response
      return Response({'errors': 'This PC Part does not exist.'}, status=400)

    # Delete the chosen PC Part from the database
    pc_part.delete()

    # Return a HTTP response notifying that the PC Part was successfully deleted
    return Response(status=204)